'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { XCircle } from 'lucide-react';
import Link from 'next/link';

export default function PaymentCancelPage() {
  return (
    <div className="bg-black pt-32 pb-24 min-h-screen flex items-center">
      <Container>
        <Card className="max-w-2xl mx-auto p-12 text-center border-white/10 bg-white/5">
          <div className="h-24 w-24 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-8">
            <XCircle className="h-12 w-12 text-red-500" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Payment Cancelled</h1>
          <p className="text-xl text-gray-400 mb-12">
            The payment process was cancelled. No charges were made. 
            If you experienced any issues, please contact our support team.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/pricing">
              <Button className="w-full h-14">View Plans</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="w-full h-14">Contact Us</Button>
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
}
