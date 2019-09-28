import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const OMDB = ({ fetchData }) => {
    useEffect(() => {
        fetchData('It');
    }, []);

    return (
        <div>
            this is an OMDB component
        </div>
    )
};

OMDB.propTypes = {
    fetchData: PropTypes.func.isRequired
};