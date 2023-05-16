import {useEffect} from 'react'

const useScript = (src,type="text/babel") => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = src;
        script.type = type;
        document.body.appendChild(script);
      return() => {
        document.body.removeChild(script);
      };
      },[])
}

export default useScript
