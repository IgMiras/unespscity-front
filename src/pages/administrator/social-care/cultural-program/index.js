import React from "react";

import {
	Details,
	AddFair,
} from "./styles";

import Header from "../../../../components/header";
import MiniCard from "../../../../components/mini-card";
import Footer from "../../../../components/footer";
import AdminListCard from "../../../../components/card-list-admin";

import Typography from "@mui/material/Typography";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../../components/styled-components/PageStyles";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AdminCulturalProgram = () => {
    return (
		<ContainerBase>
			<Header />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_servicos_sociais.png"
						titulo="Serviços Sociais"
						linkItems={[
							{
								id: 1,
								name: "Telefones Úteis",
								link: "/admin/telefones_uteis",
							},
							{
								id: 2,
								name: "Cadastro de Túmulos e Falecidos",
								link: "/admin/tumulos",
							},
							{
								id: 3,
								name: "Programação Cultural",
								link: "/admin/programacao_cultural",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">Programação Cultural</Typography>
						</div>
						<DescriptionText>
							Aqui, você administrador, pode cadastrar os programas culturais que sejam úteis para a população.   
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
					<AddFair>
						<Stack spacing={2} direction="row">
							<TextField
								fullWidth
								id="outlined-basic"
								label="Nome do Evento"
								variant="outlined"
							/>
						</Stack>
						<br />
						<Stack spacing={2} direction="row">
							<TextField
								fullWidth
								id="outlined-basic"
								label="Local"
								variant="outlined"
							/>
						</Stack>
						<br />
						<Stack spacing={2} direction="row">
							<TextField
								fullWidth
								id="outlined-basic"
								label="Descrição"
								variant="outlined"
								multiline
								rows={5}
							/>
						</Stack>
						<br />
						<Button fullWidth variant="contained">
							+ Adicionar Programa Cultural
						</Button>
					</AddFair>
					<br />
					<Details>
						<AdminListCard
							source={["https://www.auctus.com.br/wp-content/uploads/2017/09/sem-imagem-avatar.png"]}
							nome="Nome"
							sobrenome="Telefone"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
						<AdminListCard
							source={[]}
							nome="Nome"
							sobrenome="Telefone"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
						<AdminListCard
							source={[]}
							nome="Nome"
							sobrenome="Telefone"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
						<AdminListCard
							source={[]}
							nome="Nome"
							sobrenome="Telefone"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
						<AdminListCard
							source={[]}
							nome="Nome"
							sobrenome="Telefone"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
						<AdminListCard
							source={[]}
							nome="Nome"
							sobrenome="Telefone"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
					</Details>
				</MidContentContainer>
			</ContentContainer>

			<Footer />
		</ContainerBase>
	);
}

export default AdminCulturalProgram;