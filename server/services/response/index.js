export const handleSuccess = (res, result = {}, status = 200) => {
  // if (entity) {
  return res.status(status || 200).json({ success: true, ...result });
};

export const handleLogout = (res, status = 200) => {
  // if (entity) {
  return res.status(status || 200).json({ success: false, code: '401' });
};

export const notFound = res => {
  res.status(404).end();
  return null;
};

export const handleError = (
  res,
  err = { message: 'Internal Server Error' },
  status = 500
) => {
  console.error(new Date(), 'handleError : ', err);
  let errorMessage = typeof err === 'string' ? err : err.message;
  const response = {
    success: false,
    message: errorMessage || 'Something went wrong'
  };
  return res.status(err.status || status).send(response);
};
