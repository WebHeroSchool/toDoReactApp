import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

const Todo = () => {
	const initialState = {
		items: [
				{
					value: 'cоздать новое приложение',
					isDone: false,
					id: 1
				},
				{
					value: 'прописать props-ы',
					isDone: false,
					id: 2
				},
				{
					value: 'помыть машину',
					isDone: false,
					id: 3
				}
		],
		count: 3, //активные
		error: false,
		filterItems: 'all'
	};
	
	const [items, setItems] = useState (initialState.items);
  	const [filterItems, setFilterItems] = useState (initialState.filterItems);
  	const [count, setCount] = useState (initialState.count);
  	const [error, setError] = useState (initialState.error);
  	
   	const onClickDone = id => {
		const newItemList = items.map(item => {
			const newItem = { ...item };
			if (item.id === id) {
				newItem.isDone = !item.isDone;
			}
			return newItem;
		});

		const newCount = newItemList.filter(newItem => newItem.isDone === false).length;

		setItems(newItemList);
		setCount(newCount);
	};

	const filterItemList = () => {
			if (filterItems === 'active') {
				return items.filter(item => item.isDone === false);
			} if (filterItems === 'completed') {
				return items.filter(item => item.isDone === true);
			} else {
				return items;
			}
		};

	const onClickFilter = (element) => {
		setFilterItems(element);
	};

	const onClickDeleteAll = id => {
		const newDeleteAll = items.filter(item => item.isDone === false);
		const newCount = newDeleteAll.length;

		setItems(newDeleteAll);
 		setCount(newCount);
	};

	const onClickDelete = id => {
		const newDeleteItem = items.filter(item => item.id !== id);
		const newCount = newDeleteItem.filter(newItem => newItem.isDone === false).length;

		setItems(newDeleteItem);
		setCount(newCount);
	};

	const onClickAdd = value => {
		if (value === '' || items.some((item) => value === item.value)) {
 			setError (true);
		} else {
			const random = Math.floor(Math.random() * 1000);
			const newItemList = [
					...items,
					{
						value,
						isDone: false,
						id: random + 1
					}
			];
			setError (false);
			setItems (newItemList);
			setCount((count) => count + 1);
		}
	};

	const onUpdateItem = (value, id) => {
		const newItemList = items.map(item => {
			const newItem = { ...item };
			if (item.id === id) {
				newItem.value = value;
			}
			return newItem;
		});
		setItems(newItemList);
	};

	return (
			<div className={styles.wrap}>
				<h1 className={styles.title}>Важные дела:</h1>
				<InputItem onClickAdd={onClickAdd} error={error} />
				<ItemList 
					onClickDone={onClickDone}
					onClickDelete={onClickDelete}
					filterItemList={filterItemList}
					onUpdateItem={onUpdateItem} 
				/>
				<Footer 
					count={count}
					onClickDeleteAll={onClickDeleteAll}
					onClickFilter={onClickFilter}
				/>
			</div>
	);
};

Todo.defaultProps = {
	isDone: false
};

Todo.propTypes = {
	  isDone: PropTypes.bool,
	  id: PropTypes.number
};

export default Todo;