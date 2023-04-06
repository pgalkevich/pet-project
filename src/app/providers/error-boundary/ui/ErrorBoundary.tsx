import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { ErrorScreen } from 'widgets/error-screen';

interface IErrorBoundaryProps {
    children: ReactNode;
}

interface IErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            // Можно отрендерить запасной UI произвольного вида
            return (
                <Suspense fallback="">
                    <ErrorScreen />
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;