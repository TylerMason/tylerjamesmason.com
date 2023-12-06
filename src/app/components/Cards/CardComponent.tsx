import { Dialog } from '@headlessui/react';
import React, { useState } from 'react';

const CardComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="p-4">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full" src="/path-to-your-image.jpg" alt="Card Image" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card Title</div>
          <p className="text-gray-700 text-base">
            This is a basic card component using Tailwind CSS.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setIsOpen(true)}
          >
            Open Modal
          </button>

          {/* Headless UI Dialog (Modal) */}
          <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <Dialog.Panel className="rounded max-w-md p-4 absolute inset-0 m-auto bg-white">
              <Dialog.Title>Modal Title</Dialog.Title>
              <Dialog.Description>
                This is a modal using Headless UI.
              </Dialog.Description>
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
