/**
 * temp mock. 
 * todo: remove after add db
 */

let response = {
    data: [
        {
            id: 0,
            title: 'bla1',
            description: 'do something first',
            properties: {}
        },
        {
            id: 1,
            title: 'bla2',
            description: 'do something second',
            properties: {}
        },
        {
            id: 2,
            title: 'bla3',
            description: 'do something third',
            properties: {}
        },
        {
            id: 3,
            title: 'bla4',
            description: 'do something fourth',
            properties: {}
        },
    ],
    code: 200,
};

export const getData = async () => {
    console.log('get');
    return response
};

export const addItem = async (title) => {
    console.log('add');

    const lastId = response.data[response.data.length - 1]?.id;
    
    response = {
        ...response,
        data: [
            ...response.data,
            {
                id: lastId + 1,
                title,
                description: '',
                properties: {},
            }
        ]
    };

    return {
        code: 200,
    };
}

export const removeItem = async (id) => {
    console.log('remove');

    response = {
        ...response,
        ...{data: response?.data?.filter(item => item.id !== id)}
    };

    return {
        code: 204,
    }
};

export const saveItem = async (newItem) => {
    const newData = response.data.map(item => 
        item.id === newItem.id ? newItem : item
    );

    response = {
        ...response,
        data: newData
    };

    return {
        code: 200,
    }

};
