import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Sobrenos.css';

function Sobrenos() {
  return (
   <>
   <Grid container justifyContent='center' alignItems='center' className='wallpaperfundo'>
   <Grid alignItems="center" item xs={6}>
    <Box paddingX={0}>

    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'><h3>Sobre Nós</h3></Typography>
          <Typography variant="h5" component='h1' align='center'><h5 className='titulo grid5'>Nós nos chamamos:</h5><Typography variant="h5" component='h1' align='center'><h5 className='titulo grid5'>Willian, Kevin, Ricardo, Lucas e Luiz Fernando.</h5></Typography></Typography>
          <Typography align='center' className='titulo grid4' variant="h5">Este site foi desenvolvido por nós, tendo como objetivo a erradicação da pobreza em todas as formas e em todos os lugares. Como acabar com a pobreza no mundo? pode-se contribuir através de uma doação financeira: destinar uma parte de seus ganhos para financiar projetos de grande impacto social é outra saída bem comum encontrada por aqueles que desejam fazer parte da transformação planetária. Há vários projetos e iniciativas sérias com prestação de contas eficientes que merecem sua atenção e seu investimento. Também pode-se contribuir através do Voluntariado: dedicar uma parte do seu tempo para empreender ações que deem resultado na vida de várias pessoas é um caminho escolhido por milhões de pessoas em todo o mundo. Há vários tipos de voluntariados. O Projeto MEUI é um deles!</Typography>
      </Box>
  </Grid>
  <Grid item xs={6} className='grid7'>
                    
                  <img src="https://cdn.discordapp.com/attachments/1014550882538504273/1052914685495738398/quem_somos-removebg-preview.png" alt="" width="550px" height="350px" />
                
              
              </Grid>
               </Grid>
              </>
  )
}

export default Sobrenos;
 
