// ===============================
// SELECTED / CHANGES RENTAL DATES
// ===============================

function selectedRentalDates(startDate, endDate) {
	dispatchAction(Constants.CHANGED_RENTAL_DATES, {
		startDate: startDate,
		endDate: endDate
	});
}