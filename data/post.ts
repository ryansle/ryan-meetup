import mailerlite from '@/data/mailerlite';

// TODO: params typecasting
const postEmail = async (params) => {
  mailerlite.subscribers.createOrUpdate(params)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      if (error.response) console.log(error.response.data);
    });
};

export { postEmail };