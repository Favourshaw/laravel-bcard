import { useRef } from 'react';

export default function Uploads({
  onChange,
}: {
  onChange: (file: File | null) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange(file);
  };

  return (
    <div className="space-y-1">
     
      <div className="flex items-start gap-3">
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="40" height="40" rx="20" fill="#F2F4F7"/>
            <rect x="3" y="3" width="40" height="40" rx="20" stroke="#F9FAFB" stroke-width="6"/>
            <g clip-path="url(#clip0_277_3887)">
            <path d="M26.3335 26.3334L23.0002 23M23.0002 23L19.6669 26.3334M23.0002 23V30.5M29.9919 28.325C30.8047 27.8819 31.4467 27.1808 31.8168 26.3322C32.1868 25.4837 32.2637 24.5361 32.0354 23.6389C31.807 22.7418 31.2865 21.9463 30.5558 21.3779C29.8251 20.8095 28.9259 20.5006 28.0002 20.5H26.9502C26.698 19.5244 26.2278 18.6186 25.5752 17.8509C24.9225 17.0831 24.1042 16.4732 23.182 16.0672C22.2597 15.6612 21.2573 15.4695 20.2503 15.5066C19.2433 15.5437 18.2578 15.8086 17.3679 16.2814C16.4779 16.7542 15.7068 17.4226 15.1124 18.2363C14.518 19.0501 14.1158 19.988 13.936 20.9795C13.7563 21.9711 13.8036 22.9905 14.0746 23.9611C14.3455 24.9317 14.8329 25.8282 15.5002 26.5834" stroke="#001F3F" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_277_3887">
            <rect width="20" height="20" fill="white" transform="translate(13 13)"/>
            </clipPath>
            </defs>
        </svg>

        
        <span
          className="cursor-pointer text-blue-600"
          onClick={() => fileInputRef.current?.click()}
        > <label className="block mb-3 text-base font-medium text-black">Upload your logo</label> 
            <p>
            <span className="text-gray-500 text-sm">Drop your file here or </span>
            </p>
            <p className="text-sm text-primary">Click to upload</p>
          
            </span>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
