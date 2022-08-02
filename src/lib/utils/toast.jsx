export const showErrorToast = (toast, message) => {
  if (message) {
    toast({
      title: 'Woops!',
      description: message,
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
  }
};

export const showSuccessToast = (toast, message) => {
  if (message) {
    toast({
      title: 'Success!',
      description: message,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  }
};

export const showInfoToast = (toast, message) => {
  if (message) {
    toast({
      title: 'Info',
      description: message,
      status: 'info',
      duration: 5000,
      isClosable: true,
    });
  }
};
