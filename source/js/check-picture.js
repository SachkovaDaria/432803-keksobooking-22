const FILE_TYPES = ['image/jpg', 'image/gif', 'image/jpeg', 'image/png'];

const AVATAR_PIC_DEFAULT = 'img/muffin-grey.svg';
const CONTAIN = 'contain';
const BACKROUND_REPEAT = 'no-repeat';
const BACKROUND_POSITION = 'center';

const formAvatarPicElement = document.querySelector('.ad-form-header__preview img');
const formUploadPicElement = document.querySelector('.ad-form__photo');

formUploadPicElement.style.backgroundSize = CONTAIN;
formUploadPicElement.style.backgroundRepeat = BACKROUND_REPEAT;
formUploadPicElement.style.backgroundPosition = BACKROUND_POSITION;

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
  formAvatarPicElement.src = AVATAR_PIC_DEFAULT;
}
const resetBackgroundPic = () => {
  formUploadPicElement.style.backgroundImage = '';
}

export { setBackgroundPic, setAvatarPic, setHandlerPic, resetAvatarPic, resetBackgroundPic };
