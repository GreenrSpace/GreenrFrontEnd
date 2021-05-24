import { CheckIcon } from "@heroicons/react/outline";
import { Dialog } from "@headlessui/react";

export default function FormAlert(props) {
    const { type, message, ...otherProps } = props;
  
    return (
      <div>
        {type === "error" ? "danger" : "success"}
        {}
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <Dialog.Title
            as="h3"
            className="text-lg leading-6 font-medium text-gray-900"
          >
            {message}
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Welcome to the Plantform Movement!
            </p>
          </div>
        </div>
      </div>
    );
  }