import { useRef } from 'react';
import { UploadCloud } from 'lucide-react';

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
      <label className="block text-sm font-medium">Upload your logo</label>
      <div className="flex items-center gap-2">
        <UploadCloud size={20} />
        <span
          className="cursor-pointer text-blue-600"
          onClick={() => fileInputRef.current?.click()}
        >
          Click to upload
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
