const schema = {
    title: 'user Data',
    tags: 'userData',
    summary: 'verify user data schema validation',
    responses: 200,
    description: 'OK',
    content: 'application/json',
    required: ['data', 'support'],
    properties: {
        data: {
            type: 'object',
            minItems: 1,
            uniqueItems: true,
            required: ['id', 'email', 'first_name', 'last_name', 'avatar'],
            properties: {
                id: {
                    type: 'number',
                    minLength: 1
                },
                email: {
                    type: 'string',
                    minLength: 1
                },
                first_name: {
                    type: 'string',
                    minLength: 1
                },
                last_name: {
                    type: 'string',
                    minLength: 1
                },
                avatar: {
                    type: 'string',
                    minLength: 1
                }
            }
        },
        support: {
            type: 'object',
            minItems: 1,
            uniqueItems: true,
            required: ['url', 'text'],
            properties: {
                url: {
                    type: 'string',
                    minLength: 5
                },
                text: {
                    type: 'string',
                    minLength: 1
                }
            }
        }
    }
};

module.exports = {schema};