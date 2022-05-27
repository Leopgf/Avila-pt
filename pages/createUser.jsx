import Container from "../components/Container";
import {useEffect, useState} from "react";
import {useMutation} from "@apollo/client";
import Swal from 'sweetalert2'
import {CREATE_USER} from "../graphql/mutation";

const createUser = () => {

    const [createUser] = useMutation(CREATE_USER)

    const [user, setUser] = useState({
        name: "",
        email: "",
        birthDate: "",
        country: "",
        city: "",
        favProducts: [],
        status: true
    })

    const [disabled, setDisabled] = useState(false)

    useEffect(() => {

    }, [])
    // name,birthDate, email, country, city



    const onClick = async () => {
      try {
          if (user.name === "") {
              return Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Campo nombre incompleto!'
              })
          }
          if (user.email === "") {
              return Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Campo email incompleto!'
              })}
          if (user.birthDate === "") {
              return Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Campo fecha de nacimiento incompleto!'
              })}
          if (user.city === "") {return Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Campo ciudad incompleto!'
          })}
          if (user.country === "") {
              return Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Campo pais incompleto!'
              })
          }
          setDisabled(true)
          const {data} = await createUser({variables:{
              name : user.name,
              birthDate: user.birthDate,
              country: user.country,
              city: user.city,
              email: user.email,
              favProducts: user.favProducts,
              status: user.status
            }})
          if(data.createUser){
              return Swal.fire({
                  icon: 'success',
                  title: 'Usuario creado con exito',
              })
          }else{
              return Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Ocurrio un error al crear el usuario!'
              })
          }
      }catch (e){
          console.error(e)
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Ocurrio un error al crear el usuario!'
          })
      }finally {
          setDisabled(false)

      }
    }

                    return (
                        <div>
                            <Container>
                                <h2>Crear un nuevo Usuario</h2>
                                <label>Nombre: <input type="text"
                                                      onChange={e => setUser({...user, name: e.target.value})}/>
                                </label>
                                <label>Fecha de Nacimiento: <input name="date" type="date" onChange={e => setUser({
                                    ...user,
                                    birthDate: e.target.value
                                })}/> </label>
                                <label>Correo: <input name="email" type="email"
                                                      onChange={e => setUser({...user, email: e.target.value})}/>
                                </label>
                                <label>País:
                                    <select name="country" id="country"
                                            onChange={e => setUser({...user, country: e.target.value})}>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="Colombia"> Colombia</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Chile">Chile</option>
                                    </select>
                                </label>
                                <label>Ciudad: <input name="city" type="text"
                                                      onChange={e => setUser({...user, city: e.target.value})}/>
                                </label>
                                <button type="button" disabled={disabled} onClick={(e) => {
                                    e.preventDefault();
                                    onClick()
                                }}>
                                    Crear usuario
                                </button>
                            </Container>
                        </div>
                    )

                }

                export default createUser;