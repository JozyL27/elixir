import React from 'react';
import './RatingCircle.css';

export default function RatingCircle(props) {

	// <Circle percent="10" strokeWidth="4" strokeColor="#60ff00" width="50"/>
	return (
		<div class="single-chart">
			<svg viewBox="0 0 36 36" class="circular-chart green">
			<path class="circle-bg"
				d="M18 2.0845
				a 15.9155 15.9155 0 0 1 0 31.831
				a 15.9155 15.9155 0 0 1 0 -31.831"
			/>
			<path class="circle"
				stroke-dasharray={`${parseInt(props.game.total_rating)}, 100`}
				d="M18 2.0845
				a 15.9155 15.9155 0 0 1 0 31.831
				a 15.9155 15.9155 0 0 1 0 -31.831"
			/>
			<text x="19" y="15.35" class="percentage rating">Rating:</text>
			<text x="18" y="25.35" class="percentage">{parseInt(props.game.total_rating)}</text>
			</svg>
		</div>
	)
}
