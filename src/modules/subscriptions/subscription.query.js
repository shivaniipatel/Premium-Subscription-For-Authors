


class SubscriptionQuery {

    static getSubscriptionConstraints() {
        return db.from('public.subscription_constraints')
            .where('is_active', true)
            .select([
                'id',
                'name',
                'threshold',
                'code'
            ])
    }


    static updateSubscriptionEligibility(updateQuery, trx=db) {
        return trx.raw(updateQuery);
    }


    static updateSubscriptionCaps(updateQuery, trx=db) {
        return trx.raw(updateQuery);
    }

    

}

module.exports = SubscriptionQuery;