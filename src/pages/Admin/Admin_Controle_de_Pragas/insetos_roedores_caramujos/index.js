import React from "react";

import { ContainerBase, SubHeader, ContainerColumn, Square, Details } from "./styles";

import Header from "../../../../components/header";
import MiniCard from "../../../../components/mini-card";
import Line from "../../../../components/line";
import ServiceDescription from "../../../../components/service-description";
import AdminListCard from "../../../../components/admin-list-card";
import Footer from "../../../../components/footer";

const AdminPragas = () => {
    return (
        <>
            <ContainerBase>
                <Header/>
                <SubHeader>
                    <MiniCard
                        source = "/assets/img/home_controle_pragas.png"
                        titulo = "Controle de Pragas"
                    />
                    <ContainerColumn>
                        <h1> Insetos, Roedores e Caramujos </h1>
                        <Line />
                    </ContainerColumn>
                </SubHeader>
                <Square>
                    <ServiceDescription 
                        description = "Lista com todos os focos de insetos, roedores e caramujos que são relatados pelos usuarios."
                    />
                    <Details>
                        <AdminListCard
                            source = "/assets/img/home_assistencia_social.png"
                            nome = "Nome"
                            sobrenome = "Telefone"
                            click="showDeleteConfirm"
                            descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
                        />
                        <AdminListCard
                            source = "/assets/img/home_assistencia_social.png"
                            nome = "Nome"
                            sobrenome = "Telefone"
                            descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
                        />
                        <AdminListCard
                            source = "/assets/img/home_assistencia_social.png"
                            nome = "Nome"
                            sobrenome = "Telefone"
                            descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
                        />
                        <AdminListCard
                            source = "/assets/img/home_assistencia_social.png"
                            nome = "Nome"
                            sobrenome = "Telefone"
                            descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
                        />
                    </Details> 
                </Square>
                <Footer/>
            </ContainerBase>
        </>
    )
};
export default AdminPragas;