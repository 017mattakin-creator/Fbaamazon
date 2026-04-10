import { useState } from 'react';

export default function AdminFooter({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-blue-950 text-white p-4 text-center text-sm z-50">
      <h3 className="font-bold mb-2">Admin Traffic Monitor</h3>
      <p>Visitor location tracking is active via Google Analytics.</p>
      <p>Please check your Google Analytics dashboard for real-time traffic and country data.</p>
    </div>
  );
}
