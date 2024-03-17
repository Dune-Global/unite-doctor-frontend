import React from 'react'

type Props = {
    status: string
}

export default function StatusLabel({
    status
}: Readonly<Props>) {
    const renderStatus = () => {
        if (status === "Ongoing") {
            return <span className='text-xs text-ugreen-600 bg-[#d2fbd1] px-4 py-2 rounded-md'>Ongoing</span>;
        } else if (status === "Completed") {
            return <span className='text-xs text-ugray-800 bg-ugray-100 px-4 py-2 rounded-md'>Completed</span>;
        } else {
            return <span className='text-xs text-uorange-600 bg-[#f7e2c9] px-4 py-2 rounded-md'>Waiting</span>;
        }
    }

    return (
        <div>
            {renderStatus()}
        </div>
    )
}