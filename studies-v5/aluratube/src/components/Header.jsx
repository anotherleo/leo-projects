import styled from 'styled-components'

const StyledHeader = styled.div`
.user__info {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 16px;
  background-color: white;
  .photo {
    width: 80px;
    border-radius: 100%;
  }
  h2 {
    font: 700 24px 'Helvetica', sans-serif;
  }
  p {
    font: 400 16px 'Helvetica', sans-serif;
    color: #666666;
  }
}
`
function Header({ config }) {
  return (
    <StyledHeader>
      <img src="" alt="Banner" />
      <section className='user__info'>
        <img src={config.picture} alt="Foto de perfil" className='photo' />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}
