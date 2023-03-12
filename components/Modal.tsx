import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { CameraIcon } from "@heroicons/react/24/outline";

function Modal() {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [isLoading, setIsLoading] = useState(false);
  const filePickerRef = useRef<HTMLInputElement>(null);
  const captionRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<string | ArrayBuffer | null>(
    null
  );

  // FIREBASE setting needs to be done
  const uploadPost = async () => {
    if (isLoading) return;
    setIsLoading(true);
  };

  const addImageToPost = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target.files![0]) {
      reader.readAsDataURL(e.target.files![0]);
    }
    reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
      setSelectedFile(readerEvent.target!.result);
    };
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        onClose={() => setIsOpen(prev => !prev)}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        {/* full content */}
        <div className="min-h-[800px] pt-4 px-4 pb-20 flex items-end justify-center text-center sm:min-h-screen sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* Trick to Center Modal Content */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                {selectedFile ? (
                  <img
                    src={selectedFile as string}
                    alt="upload_pic"
                    onClick={() => setSelectedFile(null)}
                    className="w-full cursor-pointer object-contain"
                  />
                ) : (
                  <div
                    className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-red-100 cursor-pointer"
                    onClick={() => filePickerRef.current!.click()}
                  >
                    <CameraIcon className="w-6 h-6 text-red-600" aria-hidden />
                  </div>
                )}
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg text-gray-900 font-medium leading-6"
                    >
                      Upload a Photo
                    </Dialog.Title>

                    <div>
                      <input
                        type="file"
                        hidden
                        ref={filePickerRef}
                        onChange={addImageToPost}
                      />
                    </div>

                    <div className="mt-2">
                      <input
                        type="text"
                        placeholder="Enter a caption"
                        ref={captionRef}
                        className="w-full border-none text-center focus:ring-0"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="w-full px-4 py-2 inline-flex justify-center rounded-md border border-transparent outline-none shadow-sm bg-red-600 text-base text-white font-medium hover:bg-red-700 hover:disabled:bg-gray-300 focus:ring focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Upload Post
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Modal;
