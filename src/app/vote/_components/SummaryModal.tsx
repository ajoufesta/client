import React from 'react';
import { Category } from '@/app/lib/types';
import { CATEGORY_DISPLAYNAMES } from '@/app/lib/constants';

type SummaryModalProps = {
  selectedImages: Record<Category, string | null>;
  onClose: () => void;
  onSend: () => void;
  isSubmitted: boolean;
};

const SummaryModal: React.FC<SummaryModalProps> = ({
  selectedImages,
  onClose,
  onSend,
  isSubmitted,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-3xl h-4/5 flex flex-wrap overflow-y-auto">
        <h3 className="w-full text-2xl font-bold text-center mb-6">선택한 이미지 요약</h3>
        {Object.entries(selectedImages).map(([category, image]) => (
          <div key={category} className="w-1/2 p-4 flex flex-col items-center justify-center">
            <strong className="mb-2">{CATEGORY_DISPLAYNAMES[category as Category]}</strong>
            {image ? (
              <img src={image} alt={category} className="w-full h-full object-contain" />
            ) : (
              <span className="text-gray-500">선택되지 않음</span>
            )}
          </div>
        ))}
        <button
          onClick={onSend}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-400"
          disabled={isSubmitted}
        >
          {isSubmitted ? '전송 완료' : '결과 전송'}
        </button>
        <button
          onClick={onClose}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-400"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default SummaryModal;
