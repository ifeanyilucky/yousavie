import { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const LoadingSvg = () => (
  <svg
    role='status'
    className='inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600'
    viewBox='0 0 100 101'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
      fill='currentColor'
    />
    <path
      d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
      fill='#1C64F2'
    />
  </svg>
);

interface IProps {
  info: object;
  setInfo?: any;
}
const Search: React.FC<IProps> = ({ info, setInfo }) => {
  const [url, setUrl] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(url);
    if (url) {
      setLoading(true);
      await axios
        .post('/api/download-api', { url: url })
        .then(({ data }) => {
          setInfo(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      alert('youtube url link is required');
    }
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit} role='search'>
        <label htmlFor='search'>Paste a video url</label>
        <input
          id='search'
          type='search'
          placeholder='Paste a video URL...'
          autoFocus
          required
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type='submit'>Go</button>
      </form>
      {isLoading ? (
        <div className='loading'>
          <div className='uil-ring-css' style={{ transform: 'scale(0.79)' }}>
            <div />
          </div>
        </div>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  form {
    position: relative;
    width: 30rem;
    background: #57bd84;
    border-radius: 0.7rem;
  }
  input,
  button {
    height: 5rem;
    font-family: var(--font-fam);
    border: 0;
    color: #2f2f2f;
    font-size: 1.8rem;
  }
  input[type='search'] {
    outline: 0; // <-- shold probably remove this for better accessibility, adding for demo aesthetics for now.
    width: 100%;
    background: #fff;
    padding: 0 1.6rem;
    border-radius: 0.7rem;
    appearance: none; //for iOS input[type="search"] roundedness issue. border-radius alone doesn't work
    transition: all 0.3s cubic-bezier(0, 0, 0.43, 1.49);
    transition-property: width, border-radius;
    z-index: 1;
    position: relative;
  }
  button {
    display: none; // prevent being able to tab to it
    position: absolute;
    top: 0;
    right: 0;
    width: 6rem;
    font-weight: bold;
    background: #57bd84;
    border-radius: 0 0.7rem 0.7rem 0;
  }
  input:not(:placeholder-shown) {
    border-radius: 0.7rem 0 0 0.7rem;
    width: calc(100% - 6rem);
    + button {
      display: block;
    }
  }
  label {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }

  margin-bottom: 5rem;
  .url-input {
    outline: none;
    border: 0;
    border-bottom: 1px solid var(--theme-primary);
    padding: 10px 16px;
    width: 500px;
    &:focus {
      border-color: var(--theme-gray);
      transition: all cubic-bezier(0.39, 0.575, 0.565, 1) 1s;
    }
  }
`;

export default Search;
