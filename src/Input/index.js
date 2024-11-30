import {InputContainer} from './style';

function Input({ expression }){

  return (
    <div>
        <InputContainer type="text" value={expression}/>
    </div>
  );
}

export default Input;