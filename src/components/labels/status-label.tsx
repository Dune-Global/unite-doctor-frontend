import React from 'react'

type Props = {
    status: string
}

export default function StatusLabel({
    status
}: Readonly<Props>) {
    const renderStatus = () => {
        if (status === "Ongoing") {
            return <span className='text-xs text-ugreen-800 bg-ugreen-200 px-4 py-2 rounded-md'>Ongoing</span>;
        } else if (status === "Completed") {
            return <span className='text-xs text-ugray-800 bg-ugray-100 px-4 py-2 rounded-md'>Completed</span>;
        } else {
            return <span className='text-xs text-uorange-800 bg-uorange-200 px-4 py-2 rounded-md'>Waiting</span>;
        }
    }

    return (
        <div>
            {renderStatus()}
        </div>
    )
}