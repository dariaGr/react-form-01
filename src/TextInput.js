const TextInput = props => {
  const {
    variant,
    radius,
    size,
    placeholder,
    label,
    withAsterisk,
    disabled,
    description,
    error,
    onChange,
    name,
  } = props

  const getVariantStyles = () => {
    switch (variant) {
      case 'filled':
        return {
          backgroundColor: '#f0f0f0',
        }
      case 'unstyled':
        return {
          border: 'none',
        }
      default:
        return {}
    }
  }

  const getRadiusStyles = () => {
    switch (radius) {
      case 'xs':
        return '2px'
      case 'sm':
        return '4px'
      case 'md':
        return '6px'
      case 'lg':
        return '8px'
      case 'xl':
        return '10px'
      default:
        return radius
    }
  }

  const getSizeStyles = () => {
    switch (size) {
      case 'xs':
        return '50px'
      case 'sm':
        return '100px'
      case 'md':
        return '150px'
      case 'lg':
        return '200px'
      case 'xl':
        return '250px'
      default:
        return size
    }
  }

  const handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    if (onChange) {
      onChange(name, value)
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
      }}>
      {label && (
        <label htmlFor={placeholder}>
          {label}
          {withAsterisk && <span>*</span>}
        </label>
      )}
      <input
        style={{
          borderRadius: getRadiusStyles(),
          width: getSizeStyles(),
          ...getVariantStyles(),
        }}
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
      />
      {description && <div>{description}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  )
}

export default TextInput
