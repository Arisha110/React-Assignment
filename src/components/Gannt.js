import React, { useState } from 'react'
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

const Gannt = () => {

    const treeSize = '1%';
	const durationUnit = 'hour';

    const dataSource = [{
        label: 'John Doe',
        dateStart: '2023-01-10',
        dateEnd: '2023-09-10',
        class: 'product-team',
        type: 'task'
    },
    {
        label: 'John Doe',
        dateStart: '2023-02-01',
        dateEnd: '2023-10-30',
        class: 'marketing-team',
        type: 'task'
    },
    {
        label: 'John Doe',
        dateStart: '2023-04-11',
        dateEnd: '2023-9-16',
        class: 'product-team',
        type: 'task'
    },
    {
        label: 'John Doe',
        dateStart: '2023-05-17',
        dateEnd: '2023-07-01',
        class: 'dev-team',
        type: 'task'
    },
    {
        label: 'John Doe',
        dateStart: '2023-03-02',
        dateEnd: '2023-08-01',
        class: 'design-team',
        type: 'task'
    },
    {
        label: 'John Doe',
        dateStart: '2023-08-01',
        dateEnd: '2023-09-10',
        class: 'dev-team',
        type: 'task'
    },
    {
        label: 'John Doe',
        dateStart: '2023-02-11',
        dateEnd: '2023-10-10',
        class: 'qa-team',
        type: 'task'
    },
    
    ];



   
  return (
    <div className='w-full xl:w-[75vw] '>
    <GanttChart color='purple' className='gantt' dataSource={dataSource} treeSize={treeSize} durationUnit={durationUnit} id="gantt"></GanttChart>

    </div>
  )
}

export default Gannt