import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button';

export const BugButton = () => {
    const [error, setError] = useState<boolean>(false);

    const toggleError = (): void => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error('Simulated error');
        }
    }, [error]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={toggleError}>
            Simulate Error
        </Button>
    );
};
