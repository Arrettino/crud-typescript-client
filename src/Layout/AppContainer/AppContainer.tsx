import { useEffect, useRef } from 'react';
import useWidth from '../../hooks/useWidth';
import { sidebarClose } from '../../redux/actions/layout';
import { useDispatch, useSelector } from 'react-redux';
import IRootState from '../../redux/IRootState';

type AppContainerProps = {
    children: React.ReactChild;
};

function AppContainer(props: AppContainerProps): JSX.Element {
    const ref = useRef<HTMLDivElement>(null);
    const width = useWidth(ref);
    const dispatch = useDispatch();
    const sidebarState: boolean = useSelector((state: IRootState) => state.layout.sidebar);
    useEffect(() => {
        if (width >= 1024 && sidebarState) {
            dispatch(sidebarClose());
        }
    }, [width]);

    const { children } = props;
    return (
        <div ref={ref} style={{ height: '100%' }}>
            {children}
        </div>
    );
}

export default AppContainer;
