import {
	deleteObject,
	getDownloadURL,
	ref,
	uploadBytes
} from 'firebase/storage';
import { v4 } from 'uuid';

import { StyledAddFile, StyledImg, StyledInput } from './styles';
import { storage } from '@/config/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


const UploadPhoto = ({ value, setValue, directory }) => {
	return (
	
				<StyledImg>
					<StyledInput
						type='file'
						name='images'
						multiple
						
						onChange={e =>{
							handleLoadFile(
								Array.from(e.target.files),
								setValue,
								value,	
								directory,
								
							)}
						}
					/>
					Upload
					<FontAwesomeIcon icon={faUpload} />
				</StyledImg>
	
	);
};

const handleLoadFile = async (files, setValue, value, directory) => {
	console.log(files)
	// if (
	// 	value[keyValue] !== IMAGES.DEFAULT_PROFILE &&
	// 	value[keyValue] !== IMAGES.DEFAULT_MIXTAPE
	// ) {
	// 	const storageRefDelete = ref(storage, value[keyValue]);
	// 	try {
	// 		await deleteObject(storageRefDelete);
	// 	} catch (error) {}
	// }

	const updatedImgs = [];
  
	for (const file of files) {
	  const nameNoExtension = file.name.substring(0, file.name.lastIndexOf('.'));
	  const finalName = `${nameNoExtension}-${v4()}`;
	  const storageRef = ref(storage, `${directory}/${finalName}`);
  
	  try {
		const upload = await uploadBytes(storageRef, file);
		const imageURL = await getDownloadURL(storageRef);
  
		const updatedFile = { 
		  name: file.name, 
		  lastModified: file.lastModified, 
		  webkitRelativePath: file.webkitRelativePath, 
		  size: file.size, 
		  type: file.type,
		  imageURL: imageURL 
		};
  
		updatedImgs.push(updatedFile);
	  } catch (error) {}
	}

	setValue([...value, ...updatedImgs]);
};

export default UploadPhoto;
