import React from 'react'

type Props = {
    status: string
}

export default function StatusLabel({
    status
}: Readonly<Props>) {
    const renderStatus = () => {
        if (status === "Pending") {
            return <span className='text-xs text-uorange-600 bg-[#f7e2c9] px-4 py-2 rounded-md'>Pending</span>;
        }

        if (status === "Completed") {
            return <span className='text-xs text-ugreen-600 bg-[#d2fbd1] px-4 py-2 rounded-md'>Completed</span>;
        }
    }

    return (
        <div>
            {renderStatus()}
        </div>
    )
}