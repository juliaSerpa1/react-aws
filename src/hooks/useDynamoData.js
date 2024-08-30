import { useState, useEffect } from 'react';
import dynamoDb from '../aws-config';

const useDynamoData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const params = {
                    TableName: 'payload-teste',
                };
                const result = await dynamoDb.scan(params).promise();
                setData(result.Items);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};

export default useDynamoData;