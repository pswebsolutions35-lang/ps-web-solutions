-- PS Web Solutions Database Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- LEADS TABLE
CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    service_interest TEXT,
    budget_range TEXT,
    message TEXT,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'proposal', 'closed', 'won', 'lost')),
    source TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- CLIENTS TABLE
CREATE TABLE IF NOT EXISTS clients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_name TEXT NOT NULL,
    contact_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT,
    website_url TEXT,
    tier TEXT CHECK (tier IN ('starter', 'growth', 'premium')),
    monthly_retainer NUMERIC DEFAULT 0,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'onboarding')),
    onboarding_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- PROJECTS TABLE
CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'planning' CHECK (status IN ('planning', 'design', 'development', 'review', 'launch', 'completed', 'on-hold')),
    start_date DATE,
    target_launch_date DATE,
    completed_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- INVOICES TABLE
CREATE TABLE IF NOT EXISTS invoices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
    amount NUMERIC NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'paid', 'overdue')),
    stripe_payment_link TEXT,
    due_date DATE,
    paid_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- SUBSCRIPTIONS TABLE
CREATE TABLE IF NOT EXISTS subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
    plan_type TEXT CHECK (plan_type IN ('maintenance', 'growth-seo')),
    amount NUMERIC NOT NULL,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'past_due', 'canceled', 'unpaid')),
    stripe_subscription_id TEXT,
    start_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    next_billing_date TIMESTAMP WITH TIME ZONE
);

-- CASE STUDIES TABLE
CREATE TABLE IF NOT EXISTS case_studies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT NOT NULL UNIQUE,
    client_name TEXT NOT NULL,
    industry TEXT,
    result TEXT,
    result_label TEXT,
    metrics JSONB DEFAULT '[]'::jsonb,
    content JSONB DEFAULT '{}'::jsonb,
    published BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ROW LEVEL SECURITY

-- Enable RLS on all tables
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;

-- Create policies (Admin only access for now, public can insert leads)
-- For a real app, you'd use Supabase Auth and roles

-- LEADS: Public can insert, Admin can do all
CREATE POLICY "Public can insert leads" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin full access on leads" ON leads FOR ALL USING (auth.role() = 'service_role');

-- CASE STUDIES: Public can read published, Admin can do all
CREATE POLICY "Public can read published case studies" ON case_studies FOR SELECT USING (published = true);
CREATE POLICY "Admin full access on case studies" ON case_studies FOR ALL USING (auth.role() = 'service_role');

-- OTHERS: Admin only for now
CREATE POLICY "Admin access on clients" ON clients FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Admin access on projects" ON projects FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Admin access on invoices" ON invoices FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Admin access on subscriptions" ON subscriptions FOR ALL USING (auth.role() = 'service_role');

-- FUNCTIONS
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
