let storeReference = null;

export const setStoreReference = store => {
    if (storeReference) {
        throw new Error('Store reference has already set');
    }

    storeReference = store;

    return storeReference;
};

export const getStoreReference = () => {
    if (!storeReference) {
        throw new Error('Store reference is not set. Store reference should be set before application initialization.');
    }

    return storeReference;
};

export const hasStoreReference = () => !!storeReference;
export const getStoreState = () => getStoreReference().getState();
export const dispatchAction = action => getStoreReference().dispatch(action);
