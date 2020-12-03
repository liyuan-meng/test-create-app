import Loadable from 'react-loadable';

export default function(component) {
    return Loadable({
        loader: () => component,
        loading: () => 'loading...',
    })
};
