import React from 'react';

const List = ({arr}: {arr: string[]}) => {
    return (
        <div>
            {arr?.map((item, key) => {
                return <div key={key}>{item}</div>
            })}
        </div>
    );
};

export default List;