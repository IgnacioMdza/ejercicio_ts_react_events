interface Props {
    text: string;
    onDelete: () => void;
}

export default function Card (props: Props) {
    return (
        <article className='flex justify-between w-full text-white mb-5 text-sm'>
            <p>{props.text}</p>
            <button onClick={props.onDelete} className='bg-red-900  text-white rounded-sm px-[6px]'>
                X
            </button>
        </article>
    )
}