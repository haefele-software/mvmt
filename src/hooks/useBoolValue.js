import React from 'react';

function useBoolValue() {
    const [value, setValue] = React.useState(false);
    const toggleValue = () => setValue(!value);

    return [value, toggleValue];
}

export default useBoolValue;
