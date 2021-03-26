const FILE_TYPES = ['image/jpg', 'image/gif', 'image/jpeg', 'image/png'];

const formAvatarPicElement = document.querySelector('.ad-form-header__preview img');
const formUploadPicElement = document.querySelector('.ad-form__photo');

formUploadPicElement.style.backgroundSize = 'contain';
formUploadPicElement.style.backgroundRepeat = 'no-repeat';
formUploadPicElement.style.backgroundPosition = 'center';

const setHandlerPic = (inputElement, onLoad) => {
  inputElement.addEventListener('change', () => {
    const file = inputElement.files[0];

    const matches = FILE_TYPES.some((type) => {
      return file.type === type;
    });

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        onLoad(reader.result);
      });

      reader.readAsDataURL(file);
    }
  });
};


const setBackgroundPic = (picbase64) => {
  formUploadPicElement.style.backgroundImage = `url(${picbase64})`;
}

const setAvatarPic = (picbase64) => {
  formAvatarPicElement.src = picbase64;
}

const resetAvatarPic = () => {
  formAvatarPicElement.src = 'img/muffin-grey.svg';
}
const resetBackgroundPic = () => {
  formUploadPicElement.style.backgroundImage = '';
}

export { setBackgroundPic, setAvatarPic, setHandlerPic, resetAvatarPic, resetBackgroundPic };
