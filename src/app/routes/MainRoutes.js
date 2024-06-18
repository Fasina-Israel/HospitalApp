const MainRoutes = {
    path: '/dashboard',
    element: (
        <ProtectedRoute>
            <MainLayout />
        </ProtectedRoute>
    ),
    children: [
        {
            path: '/dashboard/default',
            element: (
                <ProtectedRoute>
                    <DashboardHome />
                </ProtectedRoute>
            )
        },
        {
            path: '/dashboard/brokers',
            element: (
                <ProtectedRoute>
                    <Broker />
                </ProtectedRoute>
            )
        },
        {
            path: '/dashboard/uploads',
            element: (
                <ProtectedRoute>
                    <Upload />
                </ProtectedRoute>
            )
        },
        {
            path: '/dashboard/invoice',
            element: (
                <ProtectedRoute>
                    <Invoice />
                </ProtectedRoute>
            )
        },
        {
            path: '/dashboard/allInvoice',
            element: (
                <ProtectedRoute>
                    <Invoice />
                </ProtectedRoute>
            )
        },
        {
            path: '/dashboard/editInvoice',
            element: (
                <ProtectedRoute>
                    <EditInvoice />
                </ProtectedRoute>
            )
        },
        {
            path: '/dashboard/assignedTrips',
            element: (
                <ProtectedRoute>
                    <AssignedTrips />
                </ProtectedRoute>
            )
        },
        {
            path: '/dashboard/settings',
            element: (
                <ProtectedRoute>
                    <Settings />
                </ProtectedRoute>
            )
        },
        {
            path: '/dashboard/singleTrips',
            element: (
                <ProtectedRoute>
                    <SingleTrips />
                </ProtectedRoute>
            )
        },
        {
            path: '/dashboard/trips',
            element: (
                <ProtectedRoute>
                    <ExecutedTrips />
                </ProtectedRoute>
            )
        },
        {
            path: '/dashboard/excutedTrips',
            element: (
                <ProtectedRoute>
                    <ExecutedTrips2 />
                </ProtectedRoute>
            )
        },
        {
            path: 'dashboard',
            children: [
                // {
                //     path: 'default',
                //     element: <DashboardDefault />
                // }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'shadow',
            element: <Shadow />
        },
        {
            path: 'typography',
            element: <Typography />
        },
        {
            path: 'icons/ant',
            element: <AntIcons />
        }
    ]
};
