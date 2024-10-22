const useHeaderState = () => {
    const headerState = useState('header', () => {})
    
    const setHeaderState = (header) => {
        headerState.value = header
    }
    return {
        headerState,
      setHeaderState
    }
  }
  export default useHeaderState