'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    if (sessionId) {
      // In a real app, you'd verify the session on the server here
      setStatus('success');
    } else {
      setStatus('error');
    }
  }, [sessionId]);

  return (
    <div className="bg-black pt-32 pb-24 min-h-screen flex items-center">
      <Container>
        <Card className="max-w-2xl mx-auto p-12 text-center border-white/10 bg-white/5">
          <div className="h-24 w-24 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="h-12 w-12 text-brand-blue" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Payment Successful!</h1>
          <p className="text-xl text-gray-400 mb-12">
            Thank you for choosing PS Web Solutions. Your transaction has been completed successfully. 
            A confirmation email and receipt have been sent to your inbox.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/dashboard">
              <Button className="w-full h-14">Go to Dashboard</Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full h-14">Return Home</Button>
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
}
