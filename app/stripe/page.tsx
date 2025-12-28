import Link from 'next/link';

export default function StripePage() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold text-blue-800 mb-2">🔄 This page has been updated!</h2>
        <p className="text-blue-700">
          We now support multiple payment providers, not just Stripe.
        </p>
      </div>
      
      <h1 className="text-3xl font-bold mb-4">Payment Services</h1>
      <p className="text-gray-600 mb-6">
        Choose from multiple payment providers:
      </p>
      
      <div className="grid gap-4 mb-8">
        <div className="border rounded-lg p-4">
          <h3 className="font-bold">✅ Stripe</h3>
          <p className="text-sm text-gray-600">Global payment processing</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="font-bold">✅ Paystack</h3>
          <p className="text-sm text-gray-600">African payments</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="font-bold">✅ PayPal</h3>
          <p className="text-sm text-gray-600">Global payment platform</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="font-bold">✅ Razorpay</h3>
          <p className="text-sm text-gray-600">Indian payment gateway</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="font-bold">✅ Flutterwave</h3>
          <p className="text-sm text-gray-600">African payment gateway</p>
        </div>
      </div>
      
      <Link 
        href="/payment"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
      >
        Go to Payment Page →
      </Link>
    </div>
  );
}
