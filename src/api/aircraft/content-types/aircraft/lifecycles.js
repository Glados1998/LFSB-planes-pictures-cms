'use strict';

const AIRCRAFT_UID = 'api::aircraft.aircraft';

const normalizeRegistration = (registration) => {
  if (typeof registration !== 'string') {
    return null;
  }

  const trimmed = registration.trim();
  return trimmed.length ? trimmed : null;
};

const syncDateOfRegistrationForRegistration = async (strapi, aircraft) => {
  const registration = normalizeRegistration(aircraft?.registration);

  if (!registration || !aircraft?.id) {
    return;
  }

  await strapi.db.query(AIRCRAFT_UID).updateMany({
    where: {
      id: { $ne: aircraft.id },
      registration,
    },
    data: {
      dateOfRegistration: aircraft.dateOfRegistration ?? null,
    },
  });
};

module.exports = {
  async afterCreate(event) {
    await syncDateOfRegistrationForRegistration(strapi, event.result);
  },

  async afterUpdate(event) {
    await syncDateOfRegistrationForRegistration(strapi, event.result);
  },
};

