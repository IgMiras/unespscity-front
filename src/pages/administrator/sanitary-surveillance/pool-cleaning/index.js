import React, { useEffect, useState } from "react";
import { api } from "../../../../services/api";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../../components/styled-components/PageStyles";
import AdminHeader from "../../../../components/header/admin";
import MiniCard from "../../../../components/mini-card";
import AdminListCard from "../../../../components/card-list-admin";
import Footer from "../../../../components/footer";
import { Typography } from "@mui/material";

const AdminPiscinas = () => {
	const [problems, setProblems] = useState([]);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/limpeza_piscinas');
				setProblems(data);
			}
			catch (e) {
				console.log(e);
			}
		}
		getProblems();
	}, [problems]);

	return (
		<ContainerBase>
			<AdminHeader />
				<ContentContainer>
					<TopContentContainer>
						<MiniCard
							source="/assets/img/home_vigilancia_sanitaria.png"
							titulo="Vigilância Sanitária"
							linkItems={[
								{
									id: 1,
									name: "Limpeza de Piscinas",
									link: "/admin/limpeza_de_piscinas",
								},
								{
									id: 2,
									name: "Limpeza de Terreno",
									link: "/admin/limpeza_de_terreno",
								},
								{
									id: 3,
									name: "Restaurantes/Ambientes Irregulares",
									link: "/admin/restaurantes",
								},
							]}
						/>
						<div style={{ marginTop: "14px" }}>
							<div style={{ textAlign: "center" }}>
								<Typography variant="h4">
									Limpeza de Piscinas
								</Typography>
							</div>
							<DescriptionText>
								Lista com todas as piscinas que precisam ser 
								limpas segundo relatadas pelos usuarios.
							</DescriptionText>
						</div>
						<div></div>
					</TopContentContainer>
					<MidContentContainer>
						{
							problems.map((problem) => (
								<AdminListCard
									source={problem.images}
									nome={problem.street}
									sobrenome={problem.referencePoint}
									descricao={problem.description}
									report={true}
									userId={problem.userId}
								/>
							))
						}
					</MidContentContainer>
				</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};
export default AdminPiscinas;
