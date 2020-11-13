const express = require('express');

const IndexControllers = require('../controllers/IndexControllers');
const BuscarProdutoControllers = require('../controllers/BuscarProdutoControllers');
const ComandaControllers = require('../controllers/ComandaControllers');
const AdminControllers = require('../controllers/AdminControllers');
const BarControllers = require('../controllers/BarControllers');
const CozinhaControllers = require('../controllers/CozinhaControllers');
const ProdutoControllers = require('../controllers/ProdutoControllers');
const CaixaControllers = require('../controllers/CaixaControllers');

const routes = express.Router();

//Cliente
routes.get('/index', IndexControllers.store); 
routes.post('/comanda/adicionar', ComandaControllers.store);
routes.get('/produto/listar', ProdutoControllers.index);
routes.get('/produto/buscar/:prod_nome', BuscarProdutoControllers.index);

//Admin
routes.get('/admin', AdminControllers.store); //Login
routes.get('/admin/comanda/listar/', ComandaControllers.store); //Comanda Listar
routes.get('/admin/comanda/alterar/:id_comanda', ComandaControllers.store); //Comanda Alterar
routes.delete('/admin/comanda/encerrar/:id_comanda', ComandaControllers.store); //Comanda Excluir
routes.get('/admin/bar/listar', BarControllers.index); //Bar Listar
routes.get('/admin/cozinha/listar', CozinhaControllers.store); //Cozinha Listar
routes.post('/admin/produto/cadastrar', ProdutoControllers.store); //Produto Adicionar
routes.post('/admin/produto/remover', ProdutoControllers.delete); //Produto Remover 
routes.put('/admin/produto/alterar/:id_produto', ProdutoControllers.update); //Produto Alterar 
routes.get('/admin/caixa/listar', CaixaControllers.index); //Caixa Listar
routes.delete('/admin/caixa/listar', CaixaControllers.delete); //Caixa Deletar

module.exports = routes;