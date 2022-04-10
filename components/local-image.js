import Image from 'next/image'

const loader = ({ src }) => {
    return `${src}`;
}

export default function LocalImage(props) {
    return (
        <Image loader={loader} {...props} />
    )
}
