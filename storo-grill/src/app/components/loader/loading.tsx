import svg from '../../../../public/loading.svg';
import Image from 'next/image';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
            <Image
                className="object-cover overflow-hidden"
                src={svg}
                width={100}
                height={100}
                alt="loading..."
            />
        </div>
    );
}