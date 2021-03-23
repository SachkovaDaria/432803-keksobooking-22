const FILE_TYPES = ['image/jpg','image/gif', 'image/jpeg', 'image/png'];

const checkAvatar = (fileChooser, preview) => {
  fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];

    const matches = FILE_TYPES.some((type) => {
      return file.type === type;
    });

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

const checkPictureAd = (fileChooser, preview) => {
  fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];

    const setBackground = (imageURL) => {
      preview.style.backgroundImage = 'url(' + imageURL + ')';
      preview.style.backgroundSize = '100%';
      preview.style.backgroundRepeat = 'no-repeat';
      preview.body.style.backgroundPosition = 'center top';
    }

    const matches = FILE_TYPES.some((type) => {
      return file.type === type;
    });

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        preview.src = setBackground(reader.result);
      });

      reader.readAsDataURL(file);
    }
  });
};

export {checkAvatar,checkPictureAd};
